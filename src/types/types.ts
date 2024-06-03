export type TComponentPriceProps = {
  text: string;
  priceText?: string;
  description?: string;
};

export type TComponentTitleProps = {
  text: string;
};

export type TComponentButtonProps = {
  textButton: string;
  onClick?: (e: any) => void;
};

export type TComponentChooseUsProps = {
  img: string;
  title: string;
  description: string;
};

export type TComponentdefoltOurTeamDataProps = {
  Description?: string | null;
  Name?: string | null;
  Photo?: ArrayBuffer | null;
  TeacherId?: string;
  Teaches?: string;
  AboutTeacher?: string;
};

export type TComponentFormProps = {
  title: string;
  description: string;
  teacher?: string;
  teacherId?: string;
};
