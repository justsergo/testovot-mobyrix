export type DropdownOption = {
  value: string,
  title: string
};

export interface DropdownProps {
  options: DropdownOption[],
  selectedOption: string,
  setOption: (val: string) => void,
  title?: string,
};

const Dropdown = ({
  options,
  selectedOption,
  setOption,
  title = "",
}: DropdownProps) => {
  return (
    <div>
      <label
        htmlFor={title}
        className="block text-sm font-medium text-gray-700"
      >
        {title}
      </label>

      <div className="mt-1 relative">
        <select
          value={selectedOption}
          onChange={(e) => setOption(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {options
            .map((option) => {
              return (
                <option value={option.value} key={option.value}>
                  {option.title}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;