import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';
import Seo from '@/components/Seo';
import Link from 'next/link';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ results }) {
    const router = useRouter();
    const onClick = (id, title) => {
        router.push(`/movies/${title}/${id}`);
    };
    const [movies, setMovies] = useState();
    useEffect(() => {
        (async () => {
            const { results } = await (await fetch(`/api/movies`)).json();
            console.log(results);
            setMovies(results);
        })();
    }, []);
    console.log(movies, 'movies');

    return (
        <>
            <div className="container">
                <Seo title="home" />
                {results?.map((item) => {
                    return (
                        <div onClick={() => onClick(item.id, item.original_title)} className="movie" key={item.id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
                            <h4>
                                <Link
                                    href={`/movies/${item.original_title}/${item.id}`}
                                    key={`titleLink${item.id}`}
                                    style={{ textDecoration: 'none', color: 'black' }}
                                >
                                    {item.original_title}
                                </Link>
                            </h4>
                        </div>
                    );
                })}

                <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
          }
          .movie {
            cursor: pointer;
          }
          .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          }
          .movie:hover img {
            transform: scale(1.05) translateY(-10px);
          }
          .movie h4 {
            font-size: 18px;
            text-align: center;
          }
         a {
            text-decoration-line = none;
            color : red;
          }
        `}</style>
            </div>
        </>
    );
}

// const getServerSideProps = async () => {};

// export getServerSideProps

export async function getServerSideProps() {
    const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
    return {
        props: {
            results,
        },
    };
}
// 위에 함수는 서버에서만 실행된다.
// 고로 그냥 fetch 를 프론트에서 쓰던거를 사용하면 안되고 프론트에 있는 api/movies 로 가도록 설정한다.
// 해당 함수가 가져오는 값이 결국 이 페이지 가 받는 props가 된다. 선택을 해야된다. 로딩이 없이 만들어 지지만
// 아마도 실행되는것 자체가 빠르진 않을것 같다. 이 적은 내용은 프론트에서(next)적었지만 실행은 백에서만 실행이된다.
//
