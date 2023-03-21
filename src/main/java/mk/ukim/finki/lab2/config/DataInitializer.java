package mk.ukim.finki.lab2.config;

import mk.ukim.finki.lab2.model.Author;
import mk.ukim.finki.lab2.model.Country;
import mk.ukim.finki.lab2.service.AuthorService;
import mk.ukim.finki.lab2.service.BookService;
import mk.ukim.finki.lab2.service.CountryService;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

import static mk.ukim.finki.lab2.model.enumerations.Category.*;

@Component
public class DataInitializer {

    private final AuthorService authorService;
    private final CountryService countryService;
    private final BookService bookService;

    public DataInitializer(AuthorService authorService, CountryService countryService, BookService bookService) {
        this.authorService = authorService;
        this.countryService = countryService;
        this.bookService = bookService;
    }

    @PostConstruct
    public void initData() {
        Country country = new Country("Macedonia", "Europe");
        Country country1 = new Country("France", "Europe");
        Country country2 = new Country("Italy", "Europe");
        Country country3 = new Country("Russia", "Europe");
        Country country4 = new Country("Germany", "Europe");

        countryService.create(country);
        countryService.create(country1);
        countryService.create(country2);
        countryService.create(country3);
        countryService.create(country4);

        Author author1 = new Author("Slavko", "Janevski", country);
        Author author2 = new Author("Victor", "Hugo", country1);
        Author author3 = new Author("Albert", "Camus", country1);
        Author author4 = new Author("Emile", "Zola", country1);
        Author author5 = new Author("Dante", "Alighieri", country2);
        Author author6 = new Author("Giovanni", "Boccaccio", country2);
        Author author7 = new Author("Fyodor", "Dostoyevsky", country3);
        Author author8 = new Author("Leo","Tolstoy", country3);
        Author author9 = new Author("Mikhail", "Bulgakov", country3);
        Author author10 = new Author("Friedrich", "Schiller", country3);
        Author author11 = new Author("Michael", "Ende", country4);
        Author author12 = new Author("Sebastian", "Fitzek", country4);
        Author author13 = new Author("Grigor", "Prlichev", country1);
        Author author14 = new Author("Kocho", "Racin", country1);

        authorService.create(author1);
        authorService.create(author2);
        authorService.create(author3);
        authorService.create(author4);
        authorService.create(author5);
        authorService.create(author6);
        authorService.create(author7);
        authorService.create(author8);
        authorService.create(author9);
        authorService.create(author10);
        authorService.create(author11);
        authorService.create(author12);
        authorService.create(author13);
        authorService.create(author14);

        this.bookService.create("Dve Marii", NOVEL, author1.getId(), 2);
        this.bookService.create("Notre-Dame de Paris", NOVEL, author2.getId(), 4);
        this.bookService.create("The Stranger", CLASSICS, author3.getId(), 20);
        this.bookService.create("Germinal", NOVEL, author4.getId(), 1);
        this.bookService.create("Divine Comedy", CLASSICS, author5.getId(), 10);
        this.bookService.create("The Decameron", NOVEL, author6.getId(), 1);
        this.bookService.create("Crime and Punishment", NOVEL, author7.getId(), 13);
        this.bookService.create("Anna Karenina", DRAMA, author8.getId(), 9);
        this.bookService.create("The Master and Margarita", NOVEL, author9.getId(), 5);
        this.bookService.create("The Robbers", DRAMA, author10.getId(), 8);
        this.bookService.create("Momo", FANTASY, author11.getId(), 6);
        this.bookService.create("The Package", THRILLER, author12.getId(), 15);
        this.bookService.create("Avtobiografija", BIOGRAPHY, author13.getId(), 6);
        this.bookService.create("Dragovitian bogomils", DRAMA, author14.getId(), 4);
    }
}
