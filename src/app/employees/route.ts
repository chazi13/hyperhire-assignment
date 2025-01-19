import { employees } from './data';

export async function GET() {
  const employeeResp = await new Promise((resolve) => {
    setTimeout(
      () => {
        resolve(employees);
      },
      Math.floor(Math.random() * 201),
    );
  });

  return Response.json(employeeResp);
}
