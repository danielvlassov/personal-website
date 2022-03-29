import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import Overview from '@/components/CodingActive/Overview';
import CodingActiveList from '@/components/CodingActive/CodingActiveList';

const CodingActive = () => {
  const { data } = useSWR('/api/read-stats', fetcher);

  return (
    <div className="flex flex-col gap-y-2">
 <p className="dark:text-gray-100">{`My weekly WakaTime Stats`}</p>

      <Overview data={data} />
      <CodingActiveList data={data} />
    </div>
  );
};

export default CodingActive;
