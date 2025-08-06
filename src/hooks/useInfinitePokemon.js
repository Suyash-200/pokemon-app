import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPokemon = async ({ pageParam = 0 }) => {
  const res = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=${pageParam}&limit=6`
  );
  const detailed = await Promise.all(
    res.data.results.map((p) => axios.get(p.url).then((res) => res.data))
  );
  return { results: detailed, nextOffset: pageParam + 6 };
};

export const useInfinitePokemon = () => {
  return useInfiniteQuery({
    queryKey: ["pokemon"],
    queryFn: fetchPokemon,
    getNextPageParam: (lastPage) => lastPage.nextOffset,
  });
};
