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
  sections: AllSections[];
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

// Generic BaseSection interface
export interface BaseSection<VALUE, TYPE extends string> {
  type: TYPE;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: VALUE[];
}

// Specific section types:

export type AllSections =
  | OffersSection
  | InstructorsSection
  | FeaturesSection
  | GroupJoinEngagementSection
  | PointersSection
  | AboutSection
  | FeatureExplanationsSection
  | TestimonialSection
  | FrequentlyAskedQuestionSection
  | FreeItemsSection
  | CertificateSection
  | BundleCertificateSection
  | RequirementSection
  | HowToPaySection
  | ContentPreviewSection;

// Section value interfaces:

export interface OfferValue {
  background_color: string;
  background_img: string;
  checklist_text_color: string;
  end_at: string; // ISO string
  id: string;
  start_at: string; // ISO string
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

// Specific typed sections
export type OffersSection = BaseSection<OfferValue, "offers">;
export type InstructorsSection = BaseSection<InstructorValue, "instructors">;
export type FeaturesSection = BaseSection<FeatureValue, "features">;
export type GroupJoinEngagementSection = BaseSection<
  GroupJoinEngagementValue,
  "group_join_engagement"
>;
export type PointersSection = BaseSection<PointerValue, "pointers">;

export type AboutSection = BaseSection<AboutValue, "about">;
export type FeatureExplanationsSection = BaseSection<
  FeatureExplanationsValue,
  "feature_explanations"
>;
export type TestimonialSection = BaseSection<TestimonialValue, "testimonials">;
export type FrequentlyAskedQuestionSection = BaseSection<
  FrequentlyAskedQuestionValue,
  "faq"
>;
export type ContentPreviewSection = BaseSection<[], "content_preview">;
export type FreeItemsSection = BaseSection<[], "free_items">;
export type CertificateSection = BaseSection<[], "certificate">;
export type BundleCertificateSection = BaseSection<[], "bundle_certificate">;
export type RequirementSection = BaseSection<[], "requirements">;
export type HowToPaySection = BaseSection<[], "how_to_pay">;
