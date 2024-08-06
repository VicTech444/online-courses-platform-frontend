import { NavList } from "./NavList";

export const Header = () => {
  return (
    <nav className="flex flex-col bg-[#021526] px-20 py-8">
      <div className="flex justify-between text-white">
        <section>
          <h1>Logo</h1>
        </section>
       <NavList />
      </div>
    </nav>
  );
};
