import * as styles from "./Topics.module.css"

import { FC, useEffect, useState } from 'react';
import { LeftSlideButton, RightSlideButton } from "../Buttons/SliderButtons";

import CustomDropDown from "../DropdownMenu/CustomDropDown";
import NumBubble from '../Buttons/NumBubble';
import { useTheme } from '../theme-provider';

interface TopicButtonProps {
  dirUpdate: string | null;
  setDirUpdate: (dir: string) => void;
  topicTitles: string[];
  selected: string;
  setSelected: (title: string) => void;
  userRepos: string[];
  repoOnDropDownSelect: string | null;
}

const TopicsCarousel: FC<TopicButtonProps> = ({
  dirUpdate,
  setDirUpdate,
  topicTitles,
  selected,
  setSelected,
  userRepos,
  repoOnDropDownSelect,
}) => {
  const { theme } = useTheme();
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(6);
  const defaultSelect = repoOnDropDownSelect || (userRepos && userRepos[0]);

  const handleNavigationClick = (direction: 'left' | 'right'): void => {
    if (direction === 'left' && startIndex > 0) {
      setStartIndex((prev) => prev - 1);
      setEndIndex((prev) => prev - 1);
    } else if (direction === 'right' && endIndex < topicTitles.length) {
      setStartIndex((prev) => prev + 1);
      setEndIndex((prev) => prev + 1);
    } else {
      reset();
    }
  };

  const reset = (): void => {
    setStartIndex(0);
    setEndIndex(6);
  };

  const dropDownRepoSelect = (): void => {
    setTimeout(() => {
      const dropdown = document.getElementById('repos') as HTMLSelectElement;
      const selectedText = dropdown.options[dropdown.selectedIndex]?.text;

      if (selectedText && dirUpdate !== selectedText) {
        setDirUpdate(selectedText);
      }
    }, 200);
  };

  const TopicsCarousel: FC = () => (
    <>
      <LeftSlideButton onClick={() => handleNavigationClick('left')} />
      <div
        className={styles.topicsContainer}
      >
        {topicTitles &&
          topicTitles.map((title, index) =>
            index >= startIndex && index <= endIndex ? (
              <button
                key={index}
                className={styles.topicButton}
                style={{
                  border: 
                    selected === title? "1px solid rgb(80, 250, 123)"
                      : theme === 'light'? "1px solid #EBEBEB"
                      : "1px solid #3C3C3C",
                  backgroundColor: selected === title ? 'rgb(80, 250, 123)' : 'transparent',
                  color: selected === title ? '#333' : undefined,
                }}
                onClick={() => setSelected(title)}
              >
                <NumBubble num={index + 1} />
                {title}
              </button>
            ) : null
          )}
      </div>
      <RightSlideButton onClick={() => handleNavigationClick('right')} />
    </>
  );

  useEffect(() => {
    if (!dirUpdate) {
      setDirUpdate(repoOnDropDownSelect || '');
    }
  }, [repoOnDropDownSelect, dirUpdate, setDirUpdate]);

  return (
    <div
      className={styles.carouselContainer}
      style={{
        border: `1px solid ${theme === 'light' ? '#EBEBEB' : '#3C3C3C'}`,
        padding: '10px'
      }}
    >
      <CustomDropDown
        items={userRepos}
        defaultSelect={defaultSelect || ''}
        func={dropDownRepoSelect}
      />
      <NumBubble num={userRepos?.length || 0} />
      <TopicsCarousel />
    </div>
  );
};

export default TopicsCarousel;
