import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ categories, onInsert }) => {
  const [value, setValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(
    categories[0]?.title,
  );

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSelectChange = useCallback((e) => {
    setSelectedCategory(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value, selectedCategory);
      setValue(''); // value값 초기화

      // submit 이벤트는 브라우저에서 새로고침을 발생시킴
      // 이를 방지하기 위해 함수 호출
      e.preventDefault();
    },
    [onInsert, value, selectedCategory],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하고 카테고리를 선택하세요"
        value={value}
        onChange={onChange}
      />
      <select onChange={onSelectChange}>
        {categories.map((category) => {
          return (
            <option key={category.key} value={category.title}>
              {category.title}
            </option>
          );
        })}
      </select>
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
