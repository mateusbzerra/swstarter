import { Card } from "@/ui/Card";

const ColumnSkeleton = () => (
  <div className="w-full space-y-3">
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
    <div className="w-full max-w-[804px] mx-auto">
      <Card>
        <div className="grid grid-cols-2 gap-x-4 animate-pulse">
          <ColumnSkeleton></ColumnSkeleton>
          <ColumnSkeleton></ColumnSkeleton>
        </div>
        <div className="w-48 h-8 bg-background rounded-full mt-[100px]"></div>
      </Card>
    </div>
  );
};
