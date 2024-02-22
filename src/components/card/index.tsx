import { useState } from 'react';
import { Chat } from 'phosphor-react-native';
import { updateLikes } from '../../api';
import { ButtonLike } from '../Button';
import {
  CardContainer,
  DescriptionCard,
  Icon,
  Line,
  LineIn,
  Tag,
  TitleCard,
  TypeCard,
} from './styles';

interface CardProps {
  title: string;
  description: string;
  type: string;
  likes: number;
  comments: number;
  postId: string;
}

export function Card({
  title,
  description,
  type,
  likes,
  comments,
  postId,
}: CardProps) {
  const [liked, setLiked] = useState(false);

  const [likeCount, setLikeCount] = useState(likes);
  const toggleLiked = async () => {
    if (!liked) {
      setLiked(true);
      const newLikes = likes + 1;
      setLikeCount(newLikes);
      await updateLikes(postId, newLikes);
    } else {
      setLiked(false);
      const newLikes = likeCount - 1;
      setLikeCount(newLikes);
      await updateLikes(postId, newLikes);
    }
  };

  return (
    <CardContainer>
      <TitleCard>{title}</TitleCard>
      <DescriptionCard numberOfLines={3}>{description}</DescriptionCard>
      <Tag>
        <TitleCard>{type}</TitleCard>
      </Tag>
      <Line>
        <ButtonLike liked={liked} onPress={toggleLiked} />

        <LineIn>
          <TitleCard>{likeCount}</TitleCard>
          <Chat size={28} weight="fill" />
          <TitleCard>
            {comments} {comments > 1 ? comments : '0'}
          </TitleCard>
        </LineIn>
      </Line>
    </CardContainer>
  );
}
