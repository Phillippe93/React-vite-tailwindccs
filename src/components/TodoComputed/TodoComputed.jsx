export const TodoComputed = (props) => {
  const { computedItemsLeft, clearTodo } = props;
  console.log(computedItemsLeft);
  return (
    <section className="px-4 py-4 flex bg-white rounded-b-md gap-4 dark:bg-gray-800">
      <span className="text-gray-400">{computedItemsLeft} item left</span>
      <button className="text-gray-400" onClick={() => clearTodo()}>
        Clear Completed
      </button>
    </section>
  );
};
