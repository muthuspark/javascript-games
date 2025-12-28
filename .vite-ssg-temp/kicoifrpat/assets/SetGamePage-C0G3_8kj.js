import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { u as useGameLoader, a as useGameSeo, B as Breadcrumb, G as GameFaqs, R as RelatedGames } from "./RelatedGames-Bqp8dbEn.js";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue";
import "vite-ssg";
const _sfc_main = {
  __name: "SetGamePage",
  __ssrInlineRender: true,
  setup(__props) {
    const game = {
      slug: "set-game",
      title: "Set Game - Find Matching Card Sets",
      shortTitle: "Set Game",
      description: "Find sets of three cards where each feature is either all the same or all different. A challenging visual logic puzzle that trains pattern recognition.",
      metaDescription: "Play Set Game online free. Find valid sets of three cards based on shape, color, fill, and count. A classic pattern recognition puzzle that challenges your brain.",
      categories: ["Puzzles", "Logic Games", "Pattern Games"],
      keywords: ["set game", "card game", "pattern recognition", "logic puzzle", "brain game", "visual puzzle", "matching game"],
      initCode: "newGame();",
      faqs: [
        {
          question: "What is a valid Set in the Set Game?",
          answer: "A valid Set consists of three cards where each of the four features (shape, color, fill, and count) is either all the same or all different across the three cards. For example, three cards with different shapes, different colors, different fills, and the same count would be a valid set."
        },
        {
          question: "What are the four features in Set?",
          answer: "Each card has four features: Shape (diamond, oval, or squiggle), Color (red, green, or purple), Fill (solid, striped, or empty), and Count (1, 2, or 3 shapes). With 3 options for each of 4 features, there are 81 unique cards in the deck."
        },
        {
          question: "How do I get better at finding Sets?",
          answer: "Start by focusing on one feature at a time. Look for cards that share two features and check if a third card completes the set. Practice recognizing common patterns and train yourself to quickly scan all four features. The more you play, the faster you'll spot valid sets."
        },
        {
          question: "What if there are no valid Sets on the board?",
          answer: `If no valid sets exist among the displayed cards, click the "Add Cards" button to add 3 more cards to the board. The game automatically ensures there's at least one valid set when starting, but as you find sets, situations with no valid sets can occur.`
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
      }, _attrs))} data-v-9bf2d32f>`);
      _push(ssrRenderComponent(Breadcrumb, { items: breadcrumbItems }, null, _parent));
      _push(`<header class="mb-4" data-v-9bf2d32f><h1 class="mb-2" itemprop="name" data-v-9bf2d32f>${ssrInterpolate(game.title)}</h1><p class="text-muted lead" itemprop="description" data-v-9bf2d32f>${ssrInterpolate(game.description)}</p><div class="mb-3" data-v-9bf2d32f><!--[-->`);
      ssrRenderList(game.categories, (category) => {
        _push(`<span class="badge bg-success me-2" itemprop="genre" data-v-9bf2d32f>${ssrInterpolate(category)}</span>`);
      });
      _push(`<!--]--></div></header><section class="game-section" aria-label="Game Area" data-v-9bf2d32f><div id="game_main_container" class="game-container" data-v-9bf2d32f><div class="controls" data-v-9bf2d32f><button onclick="newGame()" data-v-9bf2d32f>New Game</button><button onclick="addCards()" data-v-9bf2d32f>Add Cards (+3)</button><button onclick="showHint()" data-v-9bf2d32f>Hint</button></div><div class="stats" data-v-9bf2d32f><div class="stat-item" data-v-9bf2d32f><span class="stat-label" data-v-9bf2d32f>Sets Found: </span><span class="stat-value" id="setsFound" data-v-9bf2d32f>0</span></div><div class="stat-item" data-v-9bf2d32f><span class="stat-label" data-v-9bf2d32f>Time: </span><span class="stat-value" id="timer" data-v-9bf2d32f>00:00</span></div><div class="stat-item" data-v-9bf2d32f><span class="stat-label" data-v-9bf2d32f>Cards Left: </span><span class="stat-value" id="cardsLeft" data-v-9bf2d32f>0</span></div><div class="stat-item" data-v-9bf2d32f><span class="stat-label" data-v-9bf2d32f>Sets Available: </span><span class="stat-value" id="setsAvailable" data-v-9bf2d32f>0</span></div></div><div id="board" data-v-9bf2d32f></div></div></section><div class="instructions" data-v-9bf2d32f><h2 data-v-9bf2d32f>How to Play</h2><ol data-v-9bf2d32f><li data-v-9bf2d32f>Find three cards that form a valid <strong data-v-9bf2d32f>Set</strong></li><li data-v-9bf2d32f>A valid set has cards where each feature (shape, color, fill, count) is either <strong data-v-9bf2d32f>all the same</strong> or <strong data-v-9bf2d32f>all different</strong> across the three cards</li><li data-v-9bf2d32f>Click three cards to select them - if they form a valid set, they&#39;ll be replaced with new cards</li><li data-v-9bf2d32f>If no sets are available, click &quot;Add Cards&quot; to add 3 more cards to the board</li><li data-v-9bf2d32f>Use &quot;Hint&quot; if you&#39;re stuck - it will briefly highlight a valid set</li></ol><p data-v-9bf2d32f><strong data-v-9bf2d32f>Features:</strong></p><ul data-v-9bf2d32f><li data-v-9bf2d32f><strong data-v-9bf2d32f>Shapes:</strong> Diamond, Oval, Squiggle</li><li data-v-9bf2d32f><strong data-v-9bf2d32f>Colors:</strong> Red, Green, Purple</li><li data-v-9bf2d32f><strong data-v-9bf2d32f>Fills:</strong> Solid, Striped, Empty</li><li data-v-9bf2d32f><strong data-v-9bf2d32f>Counts:</strong> 1, 2, or 3 shapes</li></ul></div>`);
      _push(ssrRenderComponent(GameFaqs, {
        faqs: game.faqs
      }, null, _parent));
      _push(ssrRenderComponent(RelatedGames, {
        currentSlug: game.slug,
        categories: game.categories
      }, null, _parent));
      _push(`<meta itemprop="url"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/`)} data-v-9bf2d32f><meta itemprop="image"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/thumbnail.png`)} data-v-9bf2d32f><meta itemprop="applicationCategory" content="Game" data-v-9bf2d32f><meta itemprop="operatingSystem" content="Web Browser" data-v-9bf2d32f><span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="${ssrRenderStyle({ "display": "none" })}" data-v-9bf2d32f><meta itemprop="price" content="0" data-v-9bf2d32f><meta itemprop="priceCurrency" content="USD" data-v-9bf2d32f></span></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/games/SetGamePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SetGamePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9bf2d32f"]]);
export {
  SetGamePage as default
};
