import { Loader } from "../loader";

export function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Loader />
    </div>
  );
}
