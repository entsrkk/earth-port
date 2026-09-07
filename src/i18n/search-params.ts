export type RouteSearchParams = Record<
  string,
  string | string[] | undefined
>;

export const preserveSearchParams = (
  searchParams: RouteSearchParams,
  omittedKeys: readonly string[] = [],
): Record<string, string | string[]> => {
  const preserved: Record<string, string | string[]> = {};

  for (const [key, value] of Object.entries(searchParams)) {
    if (value !== undefined && !omittedKeys.includes(key)) {
      preserved[key] = value;
    }
  }

  return preserved;
};
