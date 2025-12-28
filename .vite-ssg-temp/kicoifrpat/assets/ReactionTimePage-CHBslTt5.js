import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { u as useGameLoader, a as useGameSeo, B as Breadcrumb, G as GameFaqs, R as RelatedGames } from "./RelatedGames-Bqp8dbEn.js";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue";
import "vite-ssg";
const _sfc_main = {
  __name: "ReactionTimePage",
  __ssrInlineRender: true,
  setup(__props) {
    const game = {
      slug: "reaction-time",
      title: "Reaction Time Test - Test Your Reflexes",
      shortTitle: "Reaction Time",
      description: "Test how fast you can react! Wait for the screen to turn green, then click as quickly as possible. Track your average and best reaction times.",
      metaDescription: "Test your reaction time online free. Wait for green, then click as fast as possible. Measure your reflexes in milliseconds and track your best time.",
      categories: ["Challenge", "Reflex Games", "Skills"],
      keywords: ["reaction time", "reflex test", "reaction test", "speed test", "reflexes", "brain game"],
      initCode: "",
      faqs: [
        {
          question: "What is a good reaction time?",
          answer: "The average human reaction time is around 250-300 milliseconds. Anything under 200ms is considered excellent. Professional gamers and athletes often have reaction times between 150-200ms."
        },
        {
          question: "How can I improve my reaction time?",
          answer: "Regular practice helps improve reaction time. Getting enough sleep, staying hydrated, and reducing distractions can also help. Some studies suggest that playing action video games may improve reaction times."
        },
        {
          question: "Why do reaction times vary?",
          answer: "Many factors affect reaction time including age, fatigue, caffeine intake, and even the time of day. Visual reaction times are typically faster than auditory ones. Your reaction time may also improve with practice on this specific test."
        }
      ]
    };
    const breadcrumbItems = [
      { name: "Home", path: "/" },
      { name: "Games", path: "/" },
      { name: game.shortTitle || game.title, path: `/posts/${game.slug}/` }
    ];
    useGameLoader(game.slug, game.initCode);
    useGameSeo(game);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: "container py-4",
        itemscope: "",
        itemtype: "https://schema.org/VideoGame"
      }, _attrs))} data-v-49b02685>`);
      _push(ssrRenderComponent(Breadcrumb, { items: breadcrumbItems }, null, _parent));
      _push(`<header class="mb-4" data-v-49b02685><h1 class="mb-2" itemprop="name" data-v-49b02685>${ssrInterpolate(game.title)}</h1><p class="text-muted lead" itemprop="description" data-v-49b02685>${ssrInterpolate(game.description)}</p><div class="mb-3" data-v-49b02685><!--[-->`);
      ssrRenderList(game.categories, (category) => {
        _push(`<span class="badge bg-success me-2" itemprop="genre" data-v-49b02685>${ssrInterpolate(category)}</span>`);
      });
      _push(`<!--]--></div></header><section class="game-section" aria-label="Game Area" data-v-49b02685><div class="game-container" data-v-49b02685><div id="reactionBox" class="reaction-box waiting" data-v-49b02685><div id="message" class="message" data-v-49b02685>Click to Start</div><div id="resultText" class="result-text" data-v-49b02685></div></div><div class="stats" data-v-49b02685><div data-v-49b02685><div class="label" data-v-49b02685>Attempts</div><div class="value" id="attempts" data-v-49b02685>0</div></div><div data-v-49b02685><div class="label" data-v-49b02685>Average</div><div class="value" id="average" data-v-49b02685>-</div></div><div data-v-49b02685><div class="label" data-v-49b02685>Best</div><div class="value" id="best" data-v-49b02685>-</div></div></div><div class="controls" data-v-49b02685><button onclick="resetGame()" data-v-49b02685>Reset Stats</button></div><div class="scale" data-v-49b02685><div class="scale-item" data-v-49b02685><div class="time-range" data-v-49b02685>&lt;200ms</div><div data-v-49b02685>Incredible</div></div><div class="scale-item" data-v-49b02685><div class="time-range" data-v-49b02685>200-250ms</div><div data-v-49b02685>Amazing</div></div><div class="scale-item" data-v-49b02685><div class="time-range" data-v-49b02685>250-350ms</div><div data-v-49b02685>Good</div></div><div class="scale-item" data-v-49b02685><div class="time-range" data-v-49b02685>&gt;350ms</div><div data-v-49b02685>Average</div></div></div><p class="instructions" data-v-49b02685> Click the box to start. When it turns <strong data-v-49b02685>red</strong>, wait. When it turns <strong data-v-49b02685>green</strong>, click as fast as you can! Don&#39;t click too early or you&#39;ll have to restart. </p></div></section>`);
      _push(ssrRenderComponent(GameFaqs, {
        faqs: game.faqs
      }, null, _parent));
      _push(ssrRenderComponent(RelatedGames, {
        currentSlug: game.slug,
        categories: game.categories
      }, null, _parent));
      _push(`<meta itemprop="url"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/`)} data-v-49b02685><meta itemprop="image"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/thumbnail.png`)} data-v-49b02685><meta itemprop="applicationCategory" content="Game" data-v-49b02685><meta itemprop="operatingSystem" content="Web Browser" data-v-49b02685><span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="${ssrRenderStyle({ "display": "none" })}" data-v-49b02685><meta itemprop="price" content="0" data-v-49b02685><meta itemprop="priceCurrency" content="USD" data-v-49b02685></span></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/games/ReactionTimePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ReactionTimePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-49b02685"]]);
export {
  ReactionTimePage as default
};
