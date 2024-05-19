import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="flex items-center px-2 py-3 border-b border-[rgba(39,_39,_42,_0.1)]">
      <Link className="font-semibold" href="/">
        My LoL Profile
      </Link>
      <div className="flex gap-4 items-center ml-auto">
        <Link
          className="px-6 py-2 rounded-md bg-red-700 text-white hover:brightness-90"
          href="/profile"
        >
          Meu Perfil
        </Link>
        <button className="flex items-center justify-center gap-2 px-6 py-2 rounded-md bg-blue-700 text-white hover:brightness-90">
          <Image
            src="/google-icon.png"
            width={14}
            height={14}
            alt="Google Icon"
          />
          Login With Google{' '}
        </button>
      </div>
    </header>
  );
}
