interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: string;
    yearsOfExperience?: string;
    location: string;
    [key: string]:any;
}