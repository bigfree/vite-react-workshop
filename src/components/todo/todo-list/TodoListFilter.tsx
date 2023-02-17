import { css } from '@emotion/react';
import { ChangeEvent, FC, useCallback } from 'react';
import useTodoStore, { FilterType, TodoStoreState } from '../../../store/TodoStoreState';
import { Gray } from '../../../theme/palette';

const TodoListFilter: FC = (): JSX.Element => {
    const changeFilter = useTodoStore((state: TodoStoreState) => state.changeFilter);

    const handleOnChangeFilter = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        changeFilter(event.target.value as FilterType);
    }, []);

    return (
        <div css={css({
            display: 'flex',
            marginBottom: '1rem',
        })}>
            <select
                onChange={handleOnChangeFilter}
                css={css({
                    border: `1px solid ${Gray['300']}`,
                    borderRadius: '.25rem',
                    padding: '.25rem',
                    boxShadow: `2px 2px 0 0 ${Gray[0]}`
                })}
            >
                <option value={FilterType.FILTER_ALL}>All todos</option>
                <option value={FilterType.FILTER_COMPLETED}>Completed todos</option>
                <option value={FilterType.FILTER_UNCOMPLETED}>Uncompleted todos</option>
            </select>
        </div>
    );
};

export default TodoListFilter;