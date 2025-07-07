import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  console.error(error);

  return (
    <div>
      ErrorPage
      <h1>whoops, Something went wrong</h1>
    </div>
  );
}