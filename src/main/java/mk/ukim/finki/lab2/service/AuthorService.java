package mk.ukim.finki.lab2.service;

import mk.ukim.finki.lab2.model.Author;
import mk.ukim.finki.lab2.model.Country;

import java.util.List;
import java.util.Optional;

public interface AuthorService {
    List<Author> findAll();

    Optional<Author> findById(Long id);

    Optional<Author> create(String name, String surname, Long countryId);

    Optional<Author> create(Author author);
}
