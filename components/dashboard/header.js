import Link from "next/link";

function Header() {
  return (
    <div>
      <div className=" h-20 bg-blue-500 flex justify-center">
        <nav className="">
          <Link href="/">
            <a className="self-left no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8">
              banky
            </a>
          </Link>

          <Link href="/explore">
            <a className="self-left no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8">
              Explore
            </a>
          </Link>
          <Link href="/profile">
            <a className="self-left no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8">
              Profile
            </a>
          </Link>
          <Link href="/cart">
            <a className="self-left no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8">
              Cart
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
