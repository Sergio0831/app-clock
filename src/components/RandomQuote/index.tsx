import { useQuery } from '@tanstack/react-query';
import { QuoteData } from '@/lib/definitions';
import { fetchRandomQuote } from '@/lib/api';
import styles from './styles.module.css';
import { Refresh } from '../Icons';
import { useToggleReadMore } from '@/hooks/useToggleReadMore';

// type RandomQuoteProps = {};

const RandomQuote = () => {
  const { data, refetch, isLoading, isError } = useQuery<QuoteData, Error>({
    queryKey: ['randomQuote'],
    queryFn: () => fetchRandomQuote(),
  });

  const handleFetchRandomQuote = () => {
    refetch();
  };

  const { state } = useToggleReadMore();

  if (isLoading) {
    return <p>Random Quote is loading...</p>;
  }

  if (isError) {
    return <p>Failed to fetch random quote</p>;
  }

  return (
    <>
      {!state.isReadMore && (
        <div className={`${styles.quoteWrapper} wrapper`}>
          {data && (
            <div className={`${styles.quote}`}>
              <blockquote>
                <p className={styles.content}>"{data?.content}"</p>
                <p className='heading-5'>{data?.author}</p>
              </blockquote>
              <button
                className={styles.refresh}
                type='button'
                aria-label='Click to fetch a new random quote'
                onClick={handleFetchRandomQuote}
              >
                <Refresh />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default RandomQuote;
