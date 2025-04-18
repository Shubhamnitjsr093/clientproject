import React, { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FaLanguage } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { GoDatabase } from "react-icons/go";
import { Button } from "./ui/button";

const LanguagePriceBox = () => {
    const [languages, setLanguages] = useState([]);
    const [countries, setCountries] = useState([]);
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        // Fetch languages
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => {
                const languageSet = new Set();
                const currencySet = new Set();

                data.forEach((country) => {
                    Object.values(country.languages || {}).forEach((lang) => languageSet.add(lang));
                    Object.values(country.currencies || {}).forEach((cur) => currencySet.add(cur.name));
                });

                setLanguages(Array.from(languageSet));
                setCurrencies(Array.from(currencySet));
                setCountries(
                    data.map((country) => ({
                        name: country.name.common,
                        region: country.region,
                    }))
                );
            })
            .catch((err) => console.error("Error fetching data:", err));
    }, []);

    return (
        <div>
            <Dialog>
                <DialogTrigger className="bg-[#FFFFFF1A] text-white px-4 py-3 rounded-md">
                    España · Español (ES) · € EUR
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Regional settings</DialogTitle>
                        <DialogDescription className="pt-8">
                            {/* Language Select */}
                            <p className="text-dark text-sm font-medium flex items-center gap-1 mb-2">
                                <FaLanguage className="text-lg" />
                                Language
                            </p>
                            <Select className="ring-0">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Language" />
                                </SelectTrigger>
                                <SelectContent>
                                    {languages.map((lang, index) => (
                                        <SelectItem key={index} value={lang}>
                                            {lang}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            {/* Country / Region Select */}
                            <p className="text-dark text-sm font-medium flex items-center gap-1 mb-2 mt-6">
                                <GrLanguage className="text-lg" />
                                Country / Region
                            </p>
                            <p className="text-sm mb-2 text-dark">
                                Selecting the country you’re in will give you local deals and information.
                            </p>
                            <Select className="ring-0">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Country" />
                                </SelectTrigger>
                                <SelectContent>
                                    {countries.map((country, index) => (
                                        <SelectItem key={index} value={country.name}>
                                            {country.name} ({country.region})
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            {/* Currency Select */}
                            <p className="text-dark text-sm font-medium flex items-center gap-1 mb-2 mt-6">
                                <GoDatabase className="text-lg" />
                                Currency
                            </p>
                            <Select className="ring-0">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Currency" />
                                </SelectTrigger>
                                <SelectContent>
                                    {currencies.map((currency, index) => (
                                        <SelectItem key={index} value={currency}>
                                            {currency}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <div className="mt-4 flex flex-col gap-2">
                                <Button>Save</Button>
                                <Button variant="light">Cancel</Button>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default LanguagePriceBox;
