import { Card } from "@/ui/Card";

const ColumnSkeleton = () => (
  <div className="w-full max-w-[322px] space-y-3 animate-pulse">
    <div className="w-36 h-[22px] bg-background rounded-sm  mb-[30px]"></div>
    <div className="w-14 h-[20px] bg-background rounded-sm"></div>
    <div className="w-36 h-2 bg-background rounded-sm"></div>
    <div className="w-36 h-2 bg-background rounded-sm"></div>
    <div className="w-36 h-2 bg-background rounded-sm"></div>
    <div className="w-36 h-2 bg-background rounded-sm"></div>
    <div className="w-36 h-2 bg-background rounded-sm"></div>
    <div className="w-36 h-2 bg-background rounded-sm"></div>
  </div>
);

export const CardSkeleton = () => {
  return (
    <div className="w-full max-w-[804px] mx-auto ">
      <Card>
        <div className="flex flex-wrap gap-x-4 gap-y-6">
          <ColumnSkeleton></ColumnSkeleton>
          <ColumnSkeleton></ColumnSkeleton>
        </div>
        <div className="w-48 h-8 bg-background rounded-full mt-[100px] animate-pulse"></div>
      </Card>
    </div>
  );
};
