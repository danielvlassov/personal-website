import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import Overview from '@/components/Contributions/Overview';
import Calendar from '@/components/Contributions/Calendar';

export default function Contributions() {
  const { data } = useSWR('/api/github', fetcher);

  const contributionCalendar = data?.contributionsCollection?.contributionCalendar;

  return (
    <div className="flex flex-col gap-y-2">
      <p className="dark:text-gray-100">{`My rolling yearly contributions on Github`}</p>

      {!data && <div className="dark:text-gray-400">No Data</div>}

      {data && (
        <>
          <Overview data={contributionCalendar} />
          <Calendar data={contributionCalendar} />
        </>
      )}
    </div>
  );
}
