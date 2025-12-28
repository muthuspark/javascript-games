import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { u as useGameLoader, a as useGameSeo, B as Breadcrumb, G as GameFaqs, R as RelatedGames } from "./RelatedGames-Bqp8dbEn.js";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue";
import "vite-ssg";
const _sfc_main = {
  __name: "DotsAndBoxesPage",
  __ssrInlineRender: true,
  setup(__props) {
    const game = {
      slug: "dots-and-boxes",
      title: "Dots and Boxes Game - Connect the Dots",
      shortTitle: "Dots and Boxes",
      description: "Play Dots and Boxes against AI. Draw lines between dots to complete boxes and score points. Classic pencil-and-paper strategy game.",
      metaDescription: "Play Dots and Boxes online free against AI. Draw lines between dots to complete squares. Classic strategy game with multiple grid sizes and difficulty levels.",
      categories: ["Strategy Games", "Classic Games", "Puzzles"],
      keywords: ["dots and boxes", "connect the dots", "squares game", "pencil paper game", "strategy game", "two player game", "classic game"],
      initCode: "newGame();",
      faqs: [
        {
          question: "What is Dots and Boxes and how do you play?",
          answer: "Dots and Boxes is a classic pencil-and-paper game for two players. The game starts with a grid of dots. Players take turns drawing horizontal or vertical lines between adjacent dots. When a player draws the fourth side of a box, they claim that box and get another turn. The player with the most boxes when the grid is full wins."
        },
        {
          question: "What is the best strategy for Dots and Boxes?",
          answer: "The key strategy is to avoid drawing the third side of any box, as this gives your opponent a free box. Try to create chains where completing one box leads to completing many more. Sometimes sacrificing a few boxes early can let you claim a larger chain later. The AI on hard difficulty uses these strategic concepts."
        },
        {
          question: "What do the different difficulty levels mean?",
          answer: "Easy: AI makes random moves. Medium: AI captures available boxes but sometimes makes suboptimal moves. Hard: AI uses strategic thinking to avoid giving away boxes and tries to create winning chains. Try the larger grid sizes for more complex games!"
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
      }, _attrs))} data-v-38c42982>`);
      _push(ssrRenderComponent(Breadcrumb, { items: breadcrumbItems }, null, _parent));
      _push(`<header class="mb-4" data-v-38c42982><h1 class="mb-2" itemprop="name" data-v-38c42982>${ssrInterpolate(game.title)}</h1><p class="text-muted lead" itemprop="description" data-v-38c42982>${ssrInterpolate(game.description)}</p><div class="mb-3" data-v-38c42982><!--[-->`);
      ssrRenderList(game.categories, (category) => {
        _push(`<span class="badge bg-success me-2" itemprop="genre" data-v-38c42982>${ssrInterpolate(category)}</span>`);
      });
      _push(`<!--]--></div></header><section id="game_main_container" class="game-section" aria-label="Game Area" data-v-38c42982><div class="game-container" data-v-38c42982><div class="controls" data-v-38c42982><select id="gridSizeSelect" class="grid-select" onchange="changeGridSize()" data-v-38c42982><option value="3" data-v-38c42982>3x3 (2x2 boxes)</option><option value="4" selected data-v-38c42982>4x4 (3x3 boxes)</option><option value="5" data-v-38c42982>5x5 (4x4 boxes)</option><option value="6" data-v-38c42982>6x6 (5x5 boxes)</option></select><select id="difficultySelect" class="difficulty-select" onchange="changeDifficulty()" data-v-38c42982><option value="easy" data-v-38c42982>Easy</option><option value="medium" selected data-v-38c42982>Medium</option><option value="hard" data-v-38c42982>Hard</option></select><button onclick="newGame()" data-v-38c42982>New Game</button></div><div id="gameStatus" class="game-status" data-v-38c42982>Your turn - Click a line to draw</div><div class="score-board" data-v-38c42982><div class="score-item player-1" data-v-38c42982><div class="score-label" data-v-38c42982>You</div><div class="score-value" id="playerScore" data-v-38c42982>0</div></div><div class="score-item player-2" data-v-38c42982><div class="score-label" data-v-38c42982>AI</div><div class="score-value" id="aiScore" data-v-38c42982>0</div></div></div><div id="gameBoard" data-v-38c42982></div><div class="legend" data-v-38c42982><div class="legend-item" data-v-38c42982><div class="legend-color player-1" data-v-38c42982></div><span data-v-38c42982>Your boxes</span></div><div class="legend-item" data-v-38c42982><div class="legend-color player-2" data-v-38c42982></div><span data-v-38c42982>AI boxes</span></div></div><div class="rules" data-v-38c42982><h4 data-v-38c42982>How to Play</h4><ul data-v-38c42982><li data-v-38c42982>Click on a line between two dots to draw it</li><li data-v-38c42982>Complete a box by drawing its fourth side to claim it</li><li data-v-38c42982>When you complete a box, you get another turn</li><li data-v-38c42982>The player with the most boxes at the end wins</li></ul></div></div></section>`);
      _push(ssrRenderComponent(GameFaqs, {
        faqs: game.faqs
      }, null, _parent));
      _push(ssrRenderComponent(RelatedGames, {
        currentSlug: game.slug,
        categories: game.categories
      }, null, _parent));
      _push(`<meta itemprop="url"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/`)} data-v-38c42982><meta itemprop="image"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/thumbnail.png`)} data-v-38c42982><meta itemprop="applicationCategory" content="Game" data-v-38c42982><meta itemprop="operatingSystem" content="Web Browser" data-v-38c42982><span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="${ssrRenderStyle({ "display": "none" })}" data-v-38c42982><meta itemprop="price" content="0" data-v-38c42982><meta itemprop="priceCurrency" content="USD" data-v-38c42982></span></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/games/DotsAndBoxesPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DotsAndBoxesPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-38c42982"]]);
export {
  DotsAndBoxesPage as default
};
