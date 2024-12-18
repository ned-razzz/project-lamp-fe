import Link from "next/link";



export default function Navigation(
  { className }: Readonly<{ className?: string}>
) {
  return (
    <nav className={className}>
      <ul className="flex justify-center items-center gap-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/archive">Archive</Link>
        </li>
        <li>
          <Link href="/calendar">Calendar</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
      </ul>
    </nav>
  );
}
