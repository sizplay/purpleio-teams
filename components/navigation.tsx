import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="h-16 flex justify-between items-center max-w-7xl mx-auto">
      <ul>
        <li>
          <Link href="/">퍼플아이오</Link>
        </li>
      </ul>
      <ul className="flex items-center gap-14">
        <li>
          <Link href="/about">회사소개</Link>
        </li>
        <li>
          <Link href="/teams">팀문화</Link>
        </li>
        <li>
          <Link href="/services">서비스</Link>
        </li>
        <li>
          <Link href="/jobs">채용공고</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
