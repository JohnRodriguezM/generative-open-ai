import ContentLoader from "react-content-loader";

export function MyComponentSkeleton() {
  return (
    <>
      <ContentLoader height={250} width={250} speed={2}>
        <circle cx="120" cy="120" r="120" />
      </ContentLoader>
      <ContentLoader height={250} width={250} speed={2}>
        <circle cx="120" cy="120" r="120" />
      </ContentLoader>
      <ContentLoader height={250} width={250} speed={2}>
        <circle cx="120" cy="120" r="120" />
      </ContentLoader>
      <ContentLoader height={250} width={250} speed={2}>
        <circle cx="120" cy="120" r="120" />
      </ContentLoader>
      <ContentLoader height={250} width={250} speed={2}>
        <circle cx="120" cy="120" r="120" />
      </ContentLoader>
      <ContentLoader height={250} width={250} speed={2}>
        <circle cx="120" cy="120" r="120" />
      </ContentLoader>
      <ContentLoader height={250} width={250} speed={2}>
        <circle cx="120" cy="120" r="120" />
      </ContentLoader>
      <ContentLoader height={250} width={250} speed={2}>
        <circle cx="120" cy="120" r="120" />
      </ContentLoader>
    </>
  );
}
