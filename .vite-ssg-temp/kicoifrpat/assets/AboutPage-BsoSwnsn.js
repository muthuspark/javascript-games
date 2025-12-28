import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import { _ as _export_sfc, s as siteData } from "../main.mjs";
import "vite-ssg";
const _imports_0 = "/profile.png";
const _sfc_main = {
  __name: "AboutPage",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "About Muthukrishnan - Creator of Brain Busters | Engineering Manager",
      meta: [
        { name: "description", content: "Learn about Muthukrishnan, the creator of Brain Busters puzzle games. Engineering Manager with 16+ years experience building scalable SaaS applications and 5 patents." },
        { name: "keywords", content: "Muthukrishnan, Brain Busters creator, engineering manager, software architect, puzzle game developer" },
        { property: "og:title", content: "About the Creator - Brain Busters" },
        { property: "og:description", content: "Meet Muthukrishnan, Engineering Manager and creator of Brain Busters free online puzzle games." },
        { property: "og:url", content: `${siteData.siteUrl}/about` },
        { property: "og:type", content: "profile" },
        { property: "og:image", content: `${siteData.siteUrl}/profile.png` },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: "About the Creator - Brain Busters" },
        { name: "twitter:description", content: "Meet Muthukrishnan, Engineering Manager and creator of Brain Busters free online puzzle games." }
      ],
      link: [
        { rel: "canonical", href: `${siteData.siteUrl}/about` }
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "mainEntity": {
              "@type": "Person",
              "name": "Muthukrishnan",
              "jobTitle": "Engineering Manager",
              "worksFor": {
                "@type": "Organization",
                "name": "Sanas AI Inc"
              },
              "url": `${siteData.siteUrl}/about`,
              "image": `${siteData.siteUrl}/profile.png`,
              "sameAs": [
                "https://twitter.com/krimuthu",
                "https://linkedin.com/in/krimuthu",
                "https://github.com/muthuspark"
              ],
              "description": "Engineering Manager with 16+ years experience in building scalable SaaS applications. Creator of Brain Busters puzzle games."
            }
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: "container py-5",
        itemscope: "",
        itemtype: "https://schema.org/ProfilePage"
      }, _attrs))} data-v-2cbbb588><div class="row justify-content-center" data-v-2cbbb588><div class="col-lg-7" data-v-2cbbb588><header class="about-header mb-5" data-v-2cbbb588><div class="profile-section" data-v-2cbbb588><img${ssrRenderAttr("src", _imports_0)} alt="Muthukrishnan - Creator of Brain Busters" class="profile-img" width="120" height="120" loading="eager" itemprop="image" data-v-2cbbb588><div class="profile-info" data-v-2cbbb588><h1 itemprop="name" data-v-2cbbb588>Muthukrishnan</h1><p class="tagline" itemprop="description" data-v-2cbbb588> Software Engineer, Researcher and Author </p><nav class="social-links" aria-label="Social media links" data-v-2cbbb588><a href="https://twitter.com/krimuthu" target="_blank" rel="noopener noreferrer" aria-label="Follow on Twitter" data-v-2cbbb588><i class="bi bi-twitter" aria-hidden="true" data-v-2cbbb588></i></a><a href="https://linkedin.com/in/krimuthu" target="_blank" rel="noopener noreferrer" aria-label="Connect on LinkedIn" data-v-2cbbb588><i class="bi bi-linkedin" aria-hidden="true" data-v-2cbbb588></i></a><a href="https://github.com/muthuspark" target="_blank" rel="noopener noreferrer" aria-label="View GitHub profile" data-v-2cbbb588><i class="bi bi-github" aria-hidden="true" data-v-2cbbb588></i></a></nav></div></div></header><section class="about-content" aria-labelledby="bio-heading" data-v-2cbbb588><h2 id="bio-heading" class="visually-hidden" data-v-2cbbb588>Biography</h2><div itemprop="mainContentOfPage" data-v-2cbbb588><p data-v-2cbbb588>I&#39;m <strong itemprop="author" itemscope itemtype="https://schema.org/Person" data-v-2cbbb588><span itemprop="name" data-v-2cbbb588>Muthukrishnan</span></strong>, currently working as an Engineering Manager at Sanas AI Inc. I have over 16 years of experience in building scalable SaaS applications from the ground up.</p><p data-v-2cbbb588>As a hands-on leader, I&#39;ve built and scaled applications that have grown from hundreds of users to millions, and I have filed about five patents covering technologies from OCR to cross-application walkthroughs.</p><p data-v-2cbbb588>In my previous role at Whatfix, I architected and launched the Desktop business, which now generates over $2 million in revenue. I built the team from scratch, guiding them to deliver innovative solutions.</p><div class="info-block" data-v-2cbbb588><h3 data-v-2cbbb588>Technical Expertise</h3><p data-v-2cbbb588>System design, software architecture, and programming languages including Java, JavaScript, and Python. Committed to process optimization and fostering an agile culture.</p></div><div class="info-block" data-v-2cbbb588><h3 data-v-2cbbb588>Why Brain Busters?</h3><p data-v-2cbbb588>A passion project combining my love of programming with classic puzzle games. Built with vanilla JavaScript to demonstrate that engaging experiences don&#39;t require heavy frameworks.</p></div><p class="text-muted" data-v-2cbbb588>Feel free to reach out via LinkedIn or GitHub for conversations about technology, engineering management, or the future of SaaS.</p></div></section></div></div></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/AboutPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AboutPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2cbbb588"]]);
export {
  AboutPage as default
};
