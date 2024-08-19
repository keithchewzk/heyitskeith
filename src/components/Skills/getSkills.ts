export async function getSkills() {
  const response = await fetch(
    "https://yi3lvjnnsj.execute-api.ap-southeast-1.amazonaws.com/prod",
    {
      method: "GET",
    }
  );
  console.log(response);
  const data = response.json();
  console.log(data);
  return data;
}
