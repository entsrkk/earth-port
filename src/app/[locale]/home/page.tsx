import { getLocale } from "next-intl/server";
import { permanentRedirect } from "@/i18n/navigation";
import {
  preserveSearchParams,
  type RouteSearchParams,
} from "@/i18n/search-params";

interface LegacyHomePageProps {
  searchParams: Promise<RouteSearchParams>;
}

const LegacyHomePage = async ({ searchParams }: LegacyHomePageProps) => {
  const [locale, query] = await Promise.all([getLocale(), searchParams]);

  permanentRedirect({
    href: {
      pathname: "/",
      query: preserveSearchParams(query),
    },
    locale,
  });
};

export default LegacyHomePage;
