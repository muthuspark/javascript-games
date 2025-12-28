import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { u as useGameLoader, a as useGameSeo, B as Breadcrumb, G as GameFaqs, R as RelatedGames } from "./RelatedGames-Bqp8dbEn.js";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue";
import "vite-ssg";
const _sfc_main = {
  __name: "WhackAMolePage",
  __ssrInlineRender: true,
  setup(__props) {
    const game = {
      slug: "whack-a-mole",
      title: "Whack-a-Mole Game - Test Your Speed",
      shortTitle: "Whack-a-Mole",
      description: "Whack the moles as they pop up from their holes! A classic arcade game that tests your reflexes. Score as many points as you can in 30 seconds.",
      metaDescription: "Play Whack-a-Mole online free. Click on moles as they pop up to score points. Classic arcade reflex game with increasing difficulty.",
      categories: ["Reflex Games", "Classic Games", "Challenge"],
      keywords: ["whack a mole", "arcade game", "reflex game", "clicking game", "speed game", "reaction game"],
      initCode: "",
      faqs: [
        {
          question: "How do you play Whack-a-Mole?",
          answer: "Click on the moles as they pop up from their holes. Each successful hit scores one point. You have 30 seconds to score as many points as possible. The moles appear faster as your score increases!"
        },
        {
          question: "What is a good Whack-a-Mole score?",
          answer: "A score of 15-20 is good for beginners. Experienced players can score 25-35 points in 30 seconds. The key is to stay focused and anticipate where moles might appear next."
        },
        {
          question: "How can I improve my Whack-a-Mole skills?",
          answer: "Keep your cursor near the center of the grid so you can reach any hole quickly. Stay relaxed and use quick, precise clicks. Practice regularly to improve your reaction time and pattern recognition."
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
      }, _attrs))} data-v-a248056f>`);
      _push(ssrRenderComponent(Breadcrumb, { items: breadcrumbItems }, null, _parent));
      _push(`<header class="mb-4" data-v-a248056f><h1 class="mb-2" itemprop="name" data-v-a248056f>${ssrInterpolate(game.title)}</h1><p class="text-muted lead" itemprop="description" data-v-a248056f>${ssrInterpolate(game.description)}</p><div class="mb-3" data-v-a248056f><!--[-->`);
      ssrRenderList(game.categories, (category) => {
        _push(`<span class="badge bg-success me-2" itemprop="genre" data-v-a248056f>${ssrInterpolate(category)}</span>`);
      });
      _push(`<!--]--></div></header><section class="game-section" aria-label="Game Area" data-v-a248056f><div class="game-container" data-v-a248056f><div class="stats" data-v-a248056f><div data-v-a248056f><div class="label" data-v-a248056f>Score</div><div class="value" id="score" data-v-a248056f>0</div></div><div data-v-a248056f><div class="label" data-v-a248056f>Time</div><div class="value" data-v-a248056f><span id="timeLeft" data-v-a248056f>30</span>s</div></div><div data-v-a248056f><div class="label" data-v-a248056f>Best</div><div class="value" id="highScore" data-v-a248056f>0</div></div></div><div id="moleGrid" data-v-a248056f></div><div id="message" class="message" data-v-a248056f></div><div class="controls" data-v-a248056f><button id="startBtn" onclick="startGame()" data-v-a248056f>Start Game</button></div><p class="instructions" data-v-a248056f> Click on the moles as they pop up from their holes. You have 30 seconds to score as many points as possible. The moles get faster as you progress! </p></div></section>`);
      _push(ssrRenderComponent(GameFaqs, {
        faqs: game.faqs
      }, null, _parent));
      _push(ssrRenderComponent(RelatedGames, {
        currentSlug: game.slug,
        categories: game.categories
      }, null, _parent));
      _push(`<meta itemprop="url"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/`)} data-v-a248056f><meta itemprop="image"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/thumbnail.png`)} data-v-a248056f><meta itemprop="applicationCategory" content="Game" data-v-a248056f><meta itemprop="operatingSystem" content="Web Browser" data-v-a248056f><span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="${ssrRenderStyle({ "display": "none" })}" data-v-a248056f><meta itemprop="price" content="0" data-v-a248056f><meta itemprop="priceCurrency" content="USD" data-v-a248056f></span></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/games/WhackAMolePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WhackAMolePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a248056f"]]);
export {
  WhackAMolePage as default
};
