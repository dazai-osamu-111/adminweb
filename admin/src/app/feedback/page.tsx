'use client';
import styles from './styles.module.scss';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

// Định nghĩa kiểu cho phản hồi
interface Feedback {
  user_name: string;
  content: string;
}

const Page: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await fetch('https://hanoibus.pro/feedback');
      const data: Feedback[] = await response.json();
      setFeedbacks(data);
    } catch (error) {
      console.error('Error fetching feedback:', error);
    }
  };

  return (
    <div className={styles['main']}>
      <div className={styles['mainDiv']}>
        <div className={styles['TitlDiv']}>
          <div className={styles['Titl']}>Dashboard</div>
        </div>
        <div className={styles['fbDiv']}>
          <div className={styles['searchDiv']}>
            <div className={styles['search']}>
              <Image width={15} height={15} src="/image/search.svg" alt="" />
              <input className={styles['input']} type="text" name="" id="" placeholder="Search" />
            </div>
            <Image width={131} height={40} src="/image/action.svg" alt="" />
          </div>
          {feedbacks.map((feedback, index) => (
            <div key={index} className={styles['fb']}>
              <div className={styles['fbs']}>
                <Image width={24} height={24} src="/image/checkbox.svg" alt="" />
                <Image width={24} height={24} src="/image/Star.svg" alt="" />
                <div className={styles['name']}>{feedback.user_name}</div>
                <div className={styles['action']}>Feedback</div>
                <div className={styles['content']}>{feedback.content}</div>
              </div>
              <div className={styles['time']}>Unknown Time</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
