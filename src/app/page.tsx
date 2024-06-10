import { redirect } from 'next/navigation';

export default function Home(): React.FC {
  return redirect('/home');
}
