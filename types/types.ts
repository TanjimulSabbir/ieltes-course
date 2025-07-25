export interface Root {
  code: number;
  data: Data;
  error: any[];
  message: string;
  payload: any[];
  status_code: number;
}

export interface Data {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  old_info: OldInfo;
  start_at: string;
  media: Media[];
  checklist: Checklist[];
  seo: any[];
  cta_text: CtaText;
  sections: Section[];
  is_cohort_based_course: boolean;
  secondary_cta_group: any[];
  delivery_method: string;
}

export interface OldInfo {
  cat_id: number;
  course_id: number;
  platform: string;
  skills_cat_id: number;
  slug: string;
}

export interface Media {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url?: string;
}

export interface Checklist {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export interface CtaText {
  name: string;
  value: string;
}

// Generic Section interface that accepts type T for values
export interface Section<T = unknown> {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: T[];
}

// Now define each specific section like this:

export interface OfferValue {
  background_color: string;
  background_img: string;
  checklist_text_color: string;
  end_at: string;
  id: string;
  start_at: string;
  template: string;
  text: string;
}
export interface InstructorValue {
  description: string; // HTML string
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
}
export interface FeatureValue {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
}

export interface GroupJoinEngagementValue {
  background: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta: {
    clicked_url: string;
    color: string;
    text: string;
  };
  description: string;
  description_color: string;
  id: string;
  thumbnail: string;
  title: string;
  title_color: string;
  top_left_icon_img: string;
}
export interface PointerValue {
  color: string;
  icon: string;
  id: string;
  text: string;
}
export interface ContentPreviewValue {}
export interface AboutValue {
  description: string; // HTML string
  icon: string;
  id: string;
  title: string;
}
export interface FeatureExplanationsValue {
  checklist: string[];
  file_type: "image" | "video" | string;
  file_url: string;
  id: string;
  title: string;
  video_thumbnail: string;
}
export interface TestimonialValue {
  id: string;
  name: string;
  description: string;
  profile_image: string;
  testimonial: string;
  thumb: string;
  video_type: string;
  video_url: string;
}

export interface FrequentlyAskedQuestionValue {
  answer: string; // HTML string
  id: string;
  question: string;
}

export type OffersSection = Section<OfferValue>;
export type InstructorsSection = Section<InstructorValue>;
export type FeaturesSection = Section<FeatureValue>;
export type GroupJoinEngagementSection = Section<GroupJoinEngagementValue>;
export type PointersSection = Section<PointerValue>;
export type EmptyValuesSection = Section<[]>;
export type TestimonialSection = Section<TestimonialValue>;

// Specific types for each section
export type FreeItemsSection = EmptyValuesSection & { type: "free_items" };
export type CertificateSection = EmptyValuesSection & { type: "certificate" };
export type BundleCertificateSection = EmptyValuesSection & {
  type: "bundle_certificate";
};
export type RequirementSection = EmptyValuesSection & { type: "requirements" };
export type HowToPaySection = EmptyValuesSection & { type: "how_to_pay" };
