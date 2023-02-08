
  # Fitness Bunch

  Note: Please ensure you have installed <code><a href="https://nodejs.org/en/download/">node js</a></code>

  To preview and run the project on your device:
  1) Open project folder in <a href="https://code.visualstudio.com/download">Visual Studio Code</a>
  2) In the terminal, run `npm install`
  3) Run `npm start` to view project in browser
  
  1.	Analiza dostępnych rozwiązań
Na obecnym rynku działa sporo aplikacji o tematyce fitness, jednak ciężko doszukać się informacji na temat aplikacji skupiającej wiele klubów fitness z określonej okolicy. W sieci możemy znaleźć liczne aplikacje do zarządzania dieta, cwiczeniami, śledzenia czy też planowania cwiczeń i postępów treningowych.  Można odnaleźć także aplikacje oferujące obsługę dla klubow fitness, a nawet aplikacje zrzeszająca trenerów personalnych, brakuje jednak aplikacji umożliwiającej łatwe szukanie, zarządzanie i przeglądanie klubów fitness. Dlatego też zrealizowanie takiego systemu jest dobrym pomysłem i może okazać się sukcesem na rynku komercyjnym aplikacji internetowych.

2.	Architektura aplikacji
2.1.	Wzorzec MVC

MVC jest obecnie jednym z najpopularniejszych wzorców projektowych. Jego głównym założeniem jest podział aplikacji na trzy odseparowane od siebie warstwy:

-	Model (Dane) 
-	View (Widok)
-	Controller (Kontroler)

Poniższy schemat obrazuje działanie poszczególnych elementów wzorca MVC. Obrazuje on również kierunek i sposób komunikacji pomiędzy kolejnymi warstwami.

3.	Wykorzystane technologie i narzędzia
TECHNOLOGIE:
Front-end:
ReactJS -
React jest biblioteką języka JavaScript służącą do budowy interfejsów użytkownika. 
Jej główną cechą jest oparcie struktury aplikacji na bazie komponentów wielokrotnego 
Użytku. Każdy komponent, zarządza własnym stanem i izoluje logikę napisaną w JavaScriptcie. Działa również we współpracy z językiem TypeScript i środowiskiem NodeJS. Biblioteka nie wykorzystuje klasycznych szablonów HTML, struktura interfejsu przechowywana jest w komponentach i zapisywana w postaci specjalnej składni JSX. Dzięki niej możliwe jest umieszczanie elementów HTML w JavaScript, czy też TypeScript i łatwe operowanie nimi.

Do realizacji interfejsu użytkownika w aplikacji wybrano właśnie tą technologię z uwagi na bardzo dużą popularność oraz ciągłe wsparcie, a także liczne dodatki możliwe do doinstalowania. Co więcej dzięki wykorzystaniu komponentów umożliwia ona uporządkowanie struktury widoków użytkownika oraz ich logiki, a także ponowne wykorzystywanie tych samych elementów, eliminuje konieczność powtarzania kodu. Dodatkową zaletą biblioteki jest duża łatwość rozbudowy systemu.

CSS (ang. Cascading Style Sheet) – kaskadowe arkusze stylów. Technika służąca do określania wyglądu interfejsu użytkownika. CSS umożliwia manewrowanie elementami znacznikami HTML oraz dostosowywanie ich wyglądu czy też pozycji na stronie. Pozwala także na tworzenie animacji elementów. CSS3 oznacza obecnie stosowaną wersję technologii. Technika ta jest standardem jeżeli chodzi stylowanie stron internetowych.


NARZEDZIA:
-Figma (projekt UX/UI) - edytor grafiki wektorowej do prototypowania interfejsu użytkownika.

 
4.	Autoryzacja użytkownika
Do autoryzacji użytkownika został użyty zewnętrzny provider w postaci Google oraz Facebooka. 
  
5.	Funkcjonalności strony internetowej

Strona internetowa pozwala w prosty sposób zorientować się w rankingu okolicznych sieci klubów fitness. Kluby ten a postawie opinii tworzą listę TOP 10, z której można skorzystać w celu wyboru odpowiedniej siłowni. 
Na stronie głównej można także znaleźć ścisłą czołówkę najbardziej polecaną, przez użytkowników. 
Po wyborze siłowni zostaniemy przekierowani, do podstrony z lokalizacją danej siłowni oraz jej dokładną oceną (w projekcie zostały zastosowane przykładowe nazwy oraz przykładowa ilość siłowni).  
 
Do poszczególnych zakładek z  funkcjonalności można przenieść się przy pomocy przycisków.
 
Oprócz rankingów oraz lokalizacji siłowni możemy także sprawdzić cenę karnetów, ponieważ docelowo każda sieć należąca pod naszą stronę, będzie posiadała identyczną stawkę za karnet. 
 
Przedstawiony został także projekt takiego karnetu.
 
Nastepnie można sprawdzic oferty trenerów personalnych działających we współpracy z niektórymi klubami fitness. Może to również słuzyć za pewnego rodzaju reklamę. 
  
Kolejną rzeczą, jest podstrona, która oferowałaby darmowe plany treningowe, które zmieniałyby się co miesiąc.
 
Ostatecznie strona posiada zakładkę “O nas”, która może krótko przybliżyć zamysł projektu.

Ważnym elementem jest także pasek nawigacyjny, który w przejrzysty sposób nawiguje użytkownika po stronie.
 
Dodatkowo u samego dołu głównej strony moża znaleść miejsce do wpisania adresu email w celu zapisania się do newslettera.
  
