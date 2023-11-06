import { useQuery } from '@tanstack/react-query';
import { QuoteData } from '@/lib/definitions';
import { fetchRandomQuote } from '@/lib/api';
import styles from './styles.module.css';
import { Refresh } from '../Icons';
import { useToggleReadMore } from '@/hooks/useToggleReadMore';

// type RandomQuoteProps = {};

const RandomQuote = () => {
  const { data, refetch, isLoading, isError } = useQuery<
    Partial<QuoteData>,
    Error
  >({
    queryKey: ['randomQuote'],
    queryFn: () => fetchRandomQuote(),
    select: (data: Partial<QuoteData>) => ({
      content: data.content,
      author: data.author,
    }),
  });

  const handleFetchRandomQuote = () => {
    refetch();
  };

  const { state } = useToggleReadMore();

  return (
    <>
      {!state.isReadMore && (
        <div className={`${styles.quoteWrapper} wrapper`}>
          {isLoading && <p>Random Quote is loading...</p>}
          {isError && <p>Failed to fetch random quote</p>}
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
