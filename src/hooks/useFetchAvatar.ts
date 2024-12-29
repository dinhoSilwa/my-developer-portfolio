import { useEffect, useState } from "react";

export const useAvatar = () => {
  const [avatarGithub, setAvatarGithub] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  useEffect(() => {
    const fetchAvatar = async () => {
      setIsLoading(true);
      await fetch("https://api.github.com/users/dinhosilwa")
        .then((response) => {
          if (response.status !== 200) {
            setIsError(true);
            return null;
          }
          setIsLoading(false);
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setAvatarGithub(data.avatar_url);
          setIsLoading(false);
        })
        .catch((error) => {
          if (error instanceof Error) {
            setIsLoading(false);
            setIsError(true);

            console.error({ msg: error.message });
          }
        });
    };
    fetchAvatar();
  }, []);

  return {
    avatarGithub,
    isLoading,
    isErrorAvatar: isError,
  };
};
