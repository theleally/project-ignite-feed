import { Avatar } from "./Avatar";
import { Trash, ThumbsUp } from "phosphor-react"

import styles from "./Comment.module.css"
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    // opção - setLikeCount(likeCount + 1);
    setLikeCount((state) => {
      return state + 1;
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/theleally.png" alt=""/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Leandro Allysson</strong>
              <time title="04 de Dezembro ás 08:43h" dateTime="2024-04-12 08:43:30">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}