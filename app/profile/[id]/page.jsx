"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import ProfileFeed from "@components/ProfileFeed";

const userProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();
      setUserPosts(data);
    };

    if (params?.id) fetchPosts();
  }, [params.id]);

  return (
    <ProfileFeed
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts adn be inspired by the power of their imagination`}
      data={userPosts}
    />
  );
};

export default userProfile;
