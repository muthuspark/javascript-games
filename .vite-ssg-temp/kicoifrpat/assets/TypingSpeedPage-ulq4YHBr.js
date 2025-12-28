import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { u as useGameLoader, a as useGameSeo, B as Breadcrumb, G as GameFaqs, R as RelatedGames } from "./RelatedGames-Bqp8dbEn.js";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue";
import "vite-ssg";
const _sfc_main = {
  __name: "TypingSpeedPage",
  __ssrInlineRender: true,
  setup(__props) {
    const game = {
      slug: "typing-speed",
      title: "Typing Speed Test - WPM Calculator",
      shortTitle: "Typing Test",
      description: "Test your typing speed and accuracy. Measure words per minute (WPM) and characters per minute (CPM) with 60-second challenges.",
      metaDescription: "Free online typing speed test. Measure your WPM and accuracy in 60 seconds. Track your progress and improve your typing skills.",
      categories: ["Challenge", "Educational", "Skills"],
      keywords: ["typing test", "typing speed", "wpm test", "typing practice", "keyboard speed"],
      initCode: "const game = new TypingGame();",
      extraScripts: ["https://unpkg.com/txtgen/dist/txtgen.min.js"],
      faqs: [
        {
          question: "What is a good typing speed?",
          answer: "Average typing speed is 40 WPM. 60-70 WPM is considered good. Professional typists often exceed 80-100 WPM."
        },
        {
          question: "How can I improve my typing speed?",
          answer: "Practice regularly, use proper finger placement, look at the screen instead of the keyboard, and focus on accuracy before speed."
        }
      ]
    };
    const breadcrumbItems = [
      { name: "Home", path: "/" },
      { name: "Games", path: "/" },
      { name: game.shortTitle || game.title, path: `/posts/${game.slug}/` }
    ];
    useGameLoader(game.slug, game.initCode, game.extraScripts);
    useGameSeo(game);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: "container py-4",
        itemscope: "",
        itemtype: "https://schema.org/VideoGame"
      }, _attrs))} data-v-9bae83e3>`);
      _push(ssrRenderComponent(Breadcrumb, { items: breadcrumbItems }, null, _parent));
      _push(`<header class="mb-4" data-v-9bae83e3><h1 class="mb-2" itemprop="name" data-v-9bae83e3>${ssrInterpolate(game.title)}</h1><p class="text-muted lead" itemprop="description" data-v-9bae83e3>${ssrInterpolate(game.description)}</p><div class="mb-3" data-v-9bae83e3><!--[-->`);
      ssrRenderList(game.categories, (category) => {
        _push(`<span class="badge bg-success me-2" itemprop="genre" data-v-9bae83e3>${ssrInterpolate(category)}</span>`);
      });
      _push(`<!--]--></div></header><section class="game-section" aria-label="Game Area" data-v-9bae83e3><div id="typingspeed" data-v-9bae83e3><div class="wrapper" data-v-9bae83e3><input type="text" class="input-field" data-v-9bae83e3><div class="content-box" data-v-9bae83e3><div class="typing-text" data-v-9bae83e3><p data-v-9bae83e3></p></div><div class="content" data-v-9bae83e3><ul class="result-details" data-v-9bae83e3><li class="time" data-v-9bae83e3>Time Left: <span data-v-9bae83e3><b data-v-9bae83e3>60</b>s</span></li><li class="mistake" data-v-9bae83e3>Mistakes: <span data-v-9bae83e3>0</span></li><li class="wpm" data-v-9bae83e3>Words Per Minute: <span data-v-9bae83e3>0</span></li><li class="cpm" data-v-9bae83e3>Characters Per Minute: <span data-v-9bae83e3>0</span></li></ul><button data-v-9bae83e3>Try Again</button></div></div></div><div class="scorecard" data-v-9bae83e3><h2 data-v-9bae83e3>Scorecard</h2><div id="scorecard" class="grid" data-v-9bae83e3><div class="g-col-6" data-v-9bae83e3><table class="table" id="history" data-v-9bae83e3><thead data-v-9bae83e3><tr data-v-9bae83e3><th data-v-9bae83e3></th><th data-v-9bae83e3>WPM</th><th data-v-9bae83e3>CPM</th><th data-v-9bae83e3>Mistakes</th></tr></thead><tbody data-v-9bae83e3></tbody></table></div><div class="g-col-6" id="chart" data-v-9bae83e3><div class="grid" data-v-9bae83e3><div id="wpm" class="g-col-4" data-v-9bae83e3></div><div id="cpm" class="g-col-4" data-v-9bae83e3></div><div id="mistakes" class="g-col-4" data-v-9bae83e3></div></div></div></div></div></div></section>`);
      _push(ssrRenderComponent(GameFaqs, {
        faqs: game.faqs
      }, null, _parent));
      _push(ssrRenderComponent(RelatedGames, {
        currentSlug: game.slug,
        categories: game.categories
      }, null, _parent));
      _push(`<meta itemprop="url"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/`)} data-v-9bae83e3><meta itemprop="image"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/thumbnail.png`)} data-v-9bae83e3><meta itemprop="applicationCategory" content="Game" data-v-9bae83e3><meta itemprop="operatingSystem" content="Web Browser" data-v-9bae83e3><span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="${ssrRenderStyle({ "display": "none" })}" data-v-9bae83e3><meta itemprop="price" content="0" data-v-9bae83e3><meta itemprop="priceCurrency" content="USD" data-v-9bae83e3></span></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/games/TypingSpeedPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TypingSpeedPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9bae83e3"]]);
export {
  TypingSpeedPage as default
};
