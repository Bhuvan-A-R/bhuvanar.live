"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { db } from "../../../firebaseConfig";
import { collection, onSnapshot, doc, updateDoc, query, orderBy } from "firebase/firestore";
import { MailIcon, LogOut, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState([]);
  const [replyingIdx, setReplyingIdx] = useState(null);
  const [pendingEditIdx, setPendingEditIdx] = useState(null);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [newestId, setNewestId] = useState(null);

  const router = useRouter();
  const ADMIN_PASSWORD = "admin123";
  const prevIds = useRef([]);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("adminLoggedIn") !== "true") {
      router.push("/admin/login");
    }
  }, [router]);

  useEffect(() => {
    // Listen for real-time updates
    const q = query(collection(db, "submissions"), orderBy("created", "desc"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      const docs = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      // Detect new record
      if (prevIds.current.length > 0 && docs.length > prevIds.current.length) {
        const newId = docs[0].id;
        setNewestId(newId);
        setTimeout(() => setNewestId(null), 1200); // Remove highlight after animation
      }
      prevIds.current = docs.map((d) => d.id);

      setSubmissions(docs);
    });
    return () => unsub();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    router.push("/admin/login");
  };

  const updateSubmission = async (id, data) => {
    const ref = doc(db, "submissions", id);
    await updateDoc(ref, data);
  };

  const sendMail = (email) => {
    window.location.href = `mailto:${email}?subject=Reply to your submission`;
  };

  const handlePasswordSubmit = () => {
    if (passwordInput === ADMIN_PASSWORD) {
      setReplyingIdx(pendingEditIdx);
      setPendingEditIdx(null);
      setPasswordInput("");
      setShowPasswordModal(false);
    } else {
      setPasswordInput("");
      alert("Incorrect password.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-primary">User Submissions</h2>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-primary/90 transition font-semibold"
          >
            <LogOut size={18} className="mr-1" />
            Logout
          </button>
        </div>

        <div className="grid gap-6">
          <AnimatePresence>
            {submissions.map((s, i) => {
              const hasReplied = s.mailSent;
              return (
                <motion.div
                  key={s.id}
                  initial={s.id === newestId ? { x: 400, opacity: 0 } : false}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 80, damping: 18 }}
                  className={`bg-white/90 p-6 rounded-2xl shadow-lg border-l-4 border-primary flex flex-col md:flex-row md:items-center md:justify-between gap-4 ${
                    s.id === newestId ? "ring-2 ring-primary/60" : ""
                  }`}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary">{s.name}</h3>
                    <p className="text-gray-500 text-sm">{s.email}</p>
                    <p className="mt-2 text-gray-700">{s.message}</p>
                    {s.mailSent !== undefined && (
                      <div className="mt-2 text-xs">
                        <span className={s.mailSent ? "text-green-600" : "text-red-600"}>
                          Mail sent: {s.mailSent ? "Yes" : "No"}
                        </span>
                        {s.replyMsg && (
                          <div className="mt-1 text-gray-500">
                            <b>Reply:</b> {s.replyMsg}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  {!hasReplied ? (
                    <button
                      onClick={() => setReplyingIdx(i)}
                      className="mt-2 md:mt-0 flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-primary/90 transition"
                    >
                      <MailIcon className="animate-bounce" size={20} />
                      Reply
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setPendingEditIdx(i);
                        setShowPasswordModal(true);
                      }}
                      className="mt-2 md:mt-0 flex items-center gap-2 bg-secondary text-primary px-4 py-2 rounded-lg font-semibold shadow hover:bg-secondary/80 transition"
                    >
                      Edit Reply
                    </button>
                  )}

                  {replyingIdx === i && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
                        <button
                          onClick={() => setReplyingIdx(null)}
                          className="absolute top-2 right-2 text-gray-400 hover:text-primary"
                        >
                          ✕
                        </button>
                        <h3 className="text-xl font-bold mb-4 text-primary">
                          Reply to {s.name}
                        </h3>
                        <div className="mb-4 text-sm text-gray-700 space-y-1">
                          <div><b>Email:</b> {s.email}</div>
                          <div><b>Message:</b> {s.message}</div>
                        </div>
                        <form
                          onSubmit={async (e) => {
                            e.preventDefault();
                            const replyMsg = e.target.replyMsg.value.trim();
                            if (!replyMsg) {
                              alert("Please enter a reply message.");
                              return;
                            }
                            await updateSubmission(s.id, {
                              mailSent: true,
                              replyMsg,
                            });
                            setReplyingIdx(null);
                          }}
                          className="flex flex-col gap-4"
                        >
                          <label className="text-sm font-medium text-gray-600">
                            Enter your reply message:
                          </label>
                          <textarea
                            name="replyMsg"
                            className="border rounded p-2"
                            placeholder="Type your reply message"
                            defaultValue={s.replyMsg || ""}
                            required
                          />
                          <div className="flex flex-col gap-2">
                            <button
                              type="button"
                              onClick={() => sendMail(s.email)}
                              className="flex items-center gap-2 bg-secondary text-primary px-4 py-2 rounded hover:bg-secondary/80"
                            >
                              <Send size={18} />
                              Open Email App
                            </button>
                            <button
                              type="submit"
                              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
                            >
                              Mark as Replied & Save Message
                            </button>
                            <button
                              type="button"
                              onClick={() => setReplyingIdx(null)}
                              className="text-primary underline"
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm relative">
            <button
              onClick={() => {
                setShowPasswordModal(false);
                setPasswordInput("");
                setPendingEditIdx(null);
              }}
              className="absolute top-2 right-2 text-gray-500 hover:text-primary"
            >
              ✕
            </button>
            <h2 className="text-lg font-semibold text-primary mb-4">Enter Admin Password</h2>
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Admin password"
              className="w-full border rounded p-2 mb-4"
            />
            <button
              onClick={handlePasswordSubmit}
              className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
