import Link from "next/link";

export const NavList = () => {
  return (
    <ul className="flex gap-x-6">
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
      <Link href={"/all-courses/"}>Courses</Link>
      </li>
      <Link href={'/log/'}>Log In</Link>
    </ul>
  );
};
