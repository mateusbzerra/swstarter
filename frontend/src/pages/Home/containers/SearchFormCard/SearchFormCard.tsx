import { SearchRequestProps } from "@/data/star-wars/types";
import { Button } from "@/ui/Button";
import { Card } from "@/ui/Card";
import { useForm, SubmitHandler } from "react-hook-form";

interface Props {
  onSubmitSearch: (data: SearchRequestProps) => void;
  isLoading?: boolean;
}

export const SearchFormCard = ({
  onSubmitSearch,
  isLoading = false,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<SearchRequestProps>({
    defaultValues: {
      searchTerm: "",
      searchType: "people",
    },
  });

  const onSubmit: SubmitHandler<SearchRequestProps> = (data) => {
    onSubmitSearch(data);
  };

  return (
    <Card>
      <h3 className="font-semibold text-cloud-grey mb-5">
        What are you searching for?
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-x-8 mb-5">
          <div className="flex items-center gap-x-[10px]">
            <input
              id="people_checkbox"
              type="radio"
              value="people"
              {...register("searchType", { required: true })}
            />
            <label
              htmlFor="people_checkbox"
              className="text-sm font-bold cursor-pointer"
            >
              People
            </label>
          </div>
          <div className="flex items-center gap-x-[10px]">
            <input
              type="radio"
              value="films"
              id="movies_checkbox"
              {...register("searchType", { required: true })}
            />
            <label
              htmlFor="movies_checkbox"
              className="text-sm font-bold cursor-pointer"
            >
              Movies
            </label>
          </div>
        </div>

        <div className="mb-5">
          <input
            className="w-full h-10 rounded-[4px] p-2 inset-shadow-md border border-pinkish-grey outline-none"
            type="text"
            placeholder="e.g. Chewbacca, Yoda, Boba Fett"
            {...register("searchTerm", { required: true })}
          />
          {errors.searchTerm && (
            <span className="block text-red-500 font-semibold text-sm mt-1">
              This field is required
            </span>
          )}
        </div>
        {errors.searchType && (
          <span className="block text-red-500 font-semibold text-sm my-2">
            Please choose between People or Movies
          </span>
        )}
        <Button disabled={!isDirty || isLoading || !isValid} type="submit">
          {isLoading ? "Searching..." : "Search"}
        </Button>
      </form>
    </Card>
  );
};
