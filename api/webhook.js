export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "POST only"
    });
  }

  console.log("===== WEBHOOK RECEIVED =====");
  console.log(JSON.stringify(req.body, null, 2));
  console.log("============================");

  return res.status(200).json({
    success: true
  });
}
