const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWFjN2JjMWRjOTg5MTE2NTI3MjRiYzkwYzgyMWRhNyIsInN1YiI6IjYyNGI2MTVjMTk2OTBjMDA2OGY0N2Q4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FnYQPPwEHBWfr0buMwbHTPFt-NfCXWZFd_jAKIPLVPs",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
