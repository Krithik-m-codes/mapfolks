export async function GET(request: Request) {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    return Response.json({
      success: true,
      message: "Test me route success",
      data: data,
      error: null,
    });
  } catch (err) {
    console.error("Error testing the route , something is wrong", err);
    return Response.json({
      success: false,
      message: "Test me route failed",
      data: null,
      error: err,
    });
  }
}
