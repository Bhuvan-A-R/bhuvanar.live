import { NextResponse } from "next/server";
import { db } from "@/lib/firebase"; // Import the Firebase database instance

export async function GET() {
  try {
    const submissionsRef = db.collection("submissions"); // Reference to the submissions collection
    const snapshot = await submissionsRef.get(); // Fetch the submissions
    const submissions = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Map the documents to an array

    return NextResponse.json(submissions); // Return the submissions as JSON
  } catch (error) {
    return NextResponse.json({ error: error.message }); // Handle errors
  }
}