package mk.ukim.finki.lab2.service;

import mk.ukim.finki.lab2.model.Country;

import java.util.List;

public interface CountryService {
    Country findById(Long id);

    Country create(Country country);

    List<Country> findAll();
}
